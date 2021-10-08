export function useStrictObject(data, desc) {
    if (typeof data !== 'object' || data === null) {
        throw TypeError('We need a `object` with out `null`');
    }

    if (!Array.isArray(data)) {
        return defineObject(data, desc);
    }

    return data.map((item) => {
        return defineObject(item, desc);
    });
}

function defineObject(data, desc) {
    let _obj = new ConstructObject();

    for (let k in data) {
        Object.defineProperty(_obj, k, {
            value: data[k],
            ...desc[k]
        })
    }

    return _obj
}

function ConstructObject() {
    for (let k in ConstructObject.prototype) {
        Object.defineProperty(ConstructObject.prototype, k, {
            writable: false,
            configurable: false,
            enumerable: false
        })
    }
}

ConstructObject.prototype.setConfig = function(k, desc, value) {
    Object.defineProperty(this, k, {
        [desc]: value
    });
}