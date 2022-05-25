class Note {
    constructor(obj) {
        this.title = obj.title;
        this.description = obj.description;
        this.date = Date.now();
        this.index = obj.index===undefined? Math.round(Math.random() * 10000): obj.index;
    }

    edit (data) {
        this.title = data.title===undefined?this.title: data.title;
        this.description = data.description===undefined?this.description: data.description;
    }
}

export {
    Note
}