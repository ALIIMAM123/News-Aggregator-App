
export const fetchNewsData = async (category, search = '', page, pageSize = 2) => {
    console.log(search, 'frignrign')
    console.log('API Key:', process.env.NEXT_PUBLIC_NEWS_API_KEY); // Should log your API key
    try {
        const fetchNewsData = await fetch(
            `https://newsapi.org/v2/top-headlines?` +
            `category=${category}&` +
            `q=${search}&` +
            `page=${page}&` +
            `pageSize=${4}&` +
            `apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
        );

        // e8ce34d530604e4ba4143ec614134df9                      -ali

        const response = await fetchNewsData.json()
        console.log(response, 'res02308')
        // console.log(response)
        if (response.status !== 'ok') {
            throw new Error('Failed to Fetch');
        }
        return response;

    } catch (error) {
        throw new Error('Failed to Fetch')
        // console.log(error)
    }
}

export const fetchCountries = async () => {
    try {
        const fetchNewsData = await fetch('https://restcountries.com/v3.1/all');
        const response = await fetchNewsData.json()
        const countryOptions = response.map((country) => ({
            name: country.name.common,
            code: country.cca2
        }));
        return countryOptions

    } catch (error) {
        throw new Error('Failed to Fetch')
    }
}