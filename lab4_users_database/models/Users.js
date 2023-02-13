const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        minlength: 4
    },
    
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
            },
            message: "Invalid email format"
        }
    },
    address: {
        street: {
            type: String,
            required: true
        },
        suite: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true,
            validate: {
                validator: function(value) {
                    return /^[a-zA-Z ]+$/.test(value);
                },
                message: "Use only alphabets and spaces for the city name"
            }
        },
        zipcode: {
            type: String,
            required: true,
            validate: {
                validator: function(value) {
                    return /^\d{5}-\d{4}$/.test(value);
                },
                message: "Invalid zip code"
            }
        },
        geo: {
            lat: {
                type: mongoose.SchemaTypes.Decimal128,
                required: true
            },
            lng: {
                type: mongoose.SchemaTypes.Decimal128,
                required: true
            }
        }
    },
    phone: {
        phone: {
            type: String,
            required: true,
            validate: {
                validator: function(value) {
                    return /^\d{1}-\d{3}-\d{3}-\d{4}$/.test(value);
                },
                message: "Invalid phone number"
            }
        }
    },
    website: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                return /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(value);
            },
            message: "Invalid URL"
        }
    },
    company: {
        name: {
            type: String,
            required: true
        },
        catchPhrase: {
            type: String,
            required: true
        },
        bs: {
            type: String,
            required: true
        }
    }
});


const User = mongoose.model("User", UserSchema);
module.exports = User;