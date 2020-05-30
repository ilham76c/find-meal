class DataSource {
    static async searchMeal(keyword) {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`);
            const responseJson = await response.json();
            
            if(responseJson.meals) {
                return responseJson.meals;
            } else {
                return `${keyword} is not found`;
            }            
        } catch (error) {
            console.log(error);
        }
    }

    static async getCategories() {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
            const responseJson = await response.json();
            console.log(responseJson);

            if (responseJson.categories) {
                return responseJson.categories;
            } else {
                return 'Categories not found';
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export default DataSource;