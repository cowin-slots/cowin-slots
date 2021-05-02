const mongoose = require('mongoose')
const Schema = mongoose.Schema

const url = 'mongodb://127.0.0.1:27017/cowin-slots'

mongoose.connect(url, { useNewUrlParser: true })

const db = mongoose.connection

const dataSchema = new Schema({
    districts: new Schema({
        18: new Schema({
            id: Number,
            name: String,
            state_name: String,
            state_id = Number,
            centers: new Schema({
                id: Number,
                name: String,
                pin: Number,
                state: String,
                dist: String,
                block: String,
                fee: String,
                slots: new Schema({
                    id: Number,
                    age_limit: Number,
                    vax: String,
                    timings: [String]
                })
            })
        }),
        45: new Schema({
            id: Number,
            name: String,
            centers: new Schema({
                id: Number,
                name: String,
                pin: Number,
                state: String,
                dist: String,
                block: String,
                fee: String,
                slots: new Schema({
                    id: Number,
                    age_limit: Number,
                    vax: String,
                    timings: [String]
                })
            })
        })
    })
})

module.exports = mongoose.model('Data', dataSchema)

// const centerSchema = new Schema({
//     id: Number,
//     name: String,
//     pin: Number,
//     state: String,
//     dist: String,
//     block: String,
//     fee: String,
//     slots: new Schema({
//         id: Number,
//         age_limit: Number,
//         vax: String,
//         timings: [String]
//     })
//   })