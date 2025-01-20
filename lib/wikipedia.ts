import axios from 'axios';

const fetchArticles = async (keywords: String[]) => {
    try{
        const query = keywords.join('|');
        const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${query}&utf8=1&origin=*`;

        const response = await axios.get(url);

        if (response.status === 200) {
            return response;
         } else {
            throw new Error('Failed to fetch articles');
        }
    }catch(e: any){
        return new Error('error occured while fetching wikipedia articles');
    }
}
export {fetchArticles};

