export async function getAllPicks() {

    try{
        const response = await fetch('https://9ubroihs37.execute-api.us-east-1.amazonaws.com/default/MaxFilmQuery');
        return await response.json();
    } catch(error) {
        return [];
    }
}