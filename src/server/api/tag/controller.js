import {client} from '../../../mongo/models/schema';

const checkMatch = (paths, tests) => {
    if (tests.length <= 0 || paths.length <= 0) {
        return true;
    }
    if (tests[tests.length - 1] === '*') {
        return paths.join('/').includes(_.take(tests, tests.length - 1).join('/'));
    }
    if (paths[paths.length - 1] !== tests[tests.length - 1]) {
        return false;
    } else {
        return checkMatch(_.take(paths, paths.length - 1), _.take(tests, tests.length - 1))
    }
};

const matching = (path, test) => {
    const paths = _.trim(path, '/').split('/');
    const tests = _.trim(test, '/').split('/');
    return checkMatch(paths, tests);
};

const getTags = (req, res) => {
    const { clientId } = req.params;
    const { path } = req.query;
    client.findById(clientId)
        .then((client) => {
            res.send(client.tags.filter((tag) => !path || matching(path, tag.path || '')));
        })
        .catch((err) => {
            res.status(400).send(err);
        })
};

const addTag = (req, res) => {
    const { clientId } = req.params;
    const { path, script, name, delay } = req.body;
    client.findById(clientId)
        .then((client) => {
            client.tags.push({ path, script, name, delay });
            return client.save();
        })
        .then((updatedClient) => {
            res.send(updatedClient.tags);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};

const updateTag = (req, res) => {
    const { clientId, id } = req.params;
    const { path, script, name, delay } = req.body;

    client.findById(clientId)
        .then((client) => {
            const tag = client.tags.find((tag) => tag._id == id);
            if (tag) {
                tag.path = path || tag.path;
                tag.script = script || tag.script;
                tag.name = name || tag.name;
                tag.delay = delay || tag.delay;
                return client.save();
            }
            throw new Error('Not found');
        })
        .then((updatedClient) => {
            res.send(updatedClient.tags);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};

const removeTag = (req, res) => {
    const { clientId, id } = req.params;
    client.findById(clientId)
        .then((foundClient) => {
            const newTags = foundClient.tags.filter((tag) => tag._id != id);
            return client.findByIdAndUpdate(clientId, { tags: newTags }, { new: true });
        })
        .then((updatedClient) => {
            res.send(updatedClient.tags);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};

export {
    getTags,
    addTag,
    updateTag,
    removeTag,
};