function itemList () {
    const itemList = [];

    const addItem = (item) => {
        itemList.push(item);
    }
    const showList = () => {
        itemList.forEach(item => {
            item.getItem();
        });
        // console.log(itemList[0].getItem());
    }

    const deleteItem = () => {}

    return {addItem, showList};
}

export {itemList}