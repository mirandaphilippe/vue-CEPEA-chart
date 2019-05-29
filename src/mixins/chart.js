export default {
    methods: {
        serializeFromVector(vector,index) {
            const serialized = [];
            vector.forEach(row => {
                let dataRow = {x:0,y:0};
                dataRow.x = new Date(row[0]);
                dataRow.y = row[1];
                serialized.push(dataRow);
                
            });
            return serialized;
        }
    },
    getDatasetFromData(data) {
        return {
            label: name,
            data: data
        }
    }
}