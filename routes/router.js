const express = require('express');
const router = express.Router();

router
    .get('/kia/',
    )

    .use(function (err, req, res, next) {
        console.error(err.stack);
        res.status(500).send({
            status: 500,
            name: 'internalServerError',
            message: 'Internal Server Error' + (err.message ? ': ' + err.message : ''),
            customMessage: 'Error Interno en el Servidor'
        });
    })

    .use((req, res) => {
        res
            .status(404)
            .send({
                status: 404,
                name: "pageNotFound",
                message: 'Resurce not found',
                customMessage: 'El recurso solicitado no se encuentra'
            })
    })

    module.exports = router;