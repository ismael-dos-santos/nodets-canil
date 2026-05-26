type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObject = (activeMenu: MenuOptions) => {
    const createMenuObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false,
    };

    if(activeMenu !== '') {
        createMenuObject[activeMenu] = true;
    }
    return createMenuObject;
};