import {client} from '../../../mongo/models/schema';

const paginations = ['limit', 'offset'];
const sorts = ['sortBy', 'order'];


const getClients = (req, res) => {
    const pagination = _.pick(req.query, paginations);
    const sort = _.pick(req.query, sorts);
    const where = _.pick(req.query, ['name']);
    const count = client.count(!_.isEmpty(where.name) ? { name: { $regex: '.*' + where.name + '.*', $options: 'i' } } : {});
    const find = client
        .find(!_.isEmpty(where.name) ? { name: { $regex: '.*' + where.name + '.*', $options: 'i' } } : {})
        .collation({ locale: 'en', strength: 2})
        .sort(_.fromPairs([[sort.sortBy, sort.order]]))
        .limit(parseInt(pagination.limit, 0))
        .skip(parseInt(pagination.offset, 0));
    Promise.all([count, find])
        .then((result) => {
            const total = result[0];
            const rows = result[1];
            if (total > 0) {
                return res.send({ total, rows });
            } else {
                return res.status(404).send('Not found');
            }
        })
        .catch((err) => {
            res.status(400).send(err);
        })
};

const getClient = (req, res) => {
    const { id } = req.params;
    client
        .findById(id)
        .then((result) => {
            if (result) {
                return res.send(result);
            } else {
                return res.status(404).send('Not found');
            }
        })
        .catch((err) => {
            res.status(400).send(err);
        })
};

const addClient = (req, res) => {
    const { name } = req.body;
    const newClient = new client({
        name,
    });
    client.findOne({ name })
        .then((foundClient) => {
            if (foundClient) {
                return res.status(400).send({ message: 'Client name has already been taken' });
            } else {
                return newClient.save()
                    .then((result) => {
                        res.send(result);
                    })
            }
        })
        .catch((err) => {
            res.status(400).send(err);
        })
};

const updateClient = (req, res) => {
    const { id } = req.params;
    const { name, websites } = req.body;
    const updates = _.pickBy({ name, websites}, (value) => !!value);
    client.findOneAndUpdate({ _id: id }, updates, { new: true })
        .then((updatedClient) => {
            res.send(updatedClient);
        })
        .catch((err) => {
            res.status(400).send(err);
        })
};

const removeClient = (req, res) => {
    const { id } = req.params;
    client.deleteOne({ _id: id })
        .then(() => {
            res.status(200).send({});
        })
        .catch((err) => {
            res.status(400).send(err);
        })
};

const removeClients = (req, res) => {
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
    getClients,
    getClient,
    addClient,
    updateClient,
    removeClient,
    removeClients,
};