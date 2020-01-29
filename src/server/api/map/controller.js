import {admin, client} from '../../../mongo/models/schema';

const getMaps = (req, res) => {
    const { clientId } = req.params;

    client.findById(clientId)
        .then((client) => {
            res.send(client.maps);
        })
        .catch((err) => {
            res.status(400).send(err);
        })
};

const addMap = (req, res) => {
    const { clientId } = req.params;
    const { path, url } = req.body;
    client.findById(clientId)
        .then((client) => {
            client.maps.push({ path, url });
            return client.save();
        })
        .then((updatedClient) => {
            res.send(updatedClient.maps);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};

const updateMap = (req, res) => {
    const { clientId, id } = req.params;
    const { path, tags } = req.body;
    client.findById(clientId)
        .then((client) => {
            const map = client.maps.find((map) => map._id === id);
            if (map) {
                map.path = path;
                map.tags = tags;
                return client.save();
            }
            throw new Error('Not found');
        })
        .then((updatedClient) => {
            res.send(updatedClient.maps);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
};

const removeClient = (req, res) => {
    const { ids } = req.body;
    client.deleteMany({ _id: { $in: ids } })
        .then(() => {
            res.status(200).send({});
        })
        .catch((err) => {
            res.status(400).send(err);
        })
};

export {
    getMaps,
    addMap,
    updateMap,
};