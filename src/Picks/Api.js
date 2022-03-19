import React from 'react';
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Api() {
    const { data, error } = useSWR(
        "https://9ubroihs37.execute-api.us-east-1.amazonaws.com/default/MaxFilmQuery",
        fetcher
    );

    if (error) return "An error has occured.";
    if (!data) return "Loading...";

    //console.log(data.Items[0].EpisodeNum.N);
    console.log(data)

    //let Items = data.Items

    // TODO: Figure out how to map out the picks for each movie

    return(
        <div>
            <p>Data Here</p>
            <div>{ data ? (
                data.Items.map((item) => {
                    return (
                        <>
                            <p>Episode Number : {item.EpisodeNum.N} </p>
                            <p>Date: {item.date.S}</p>
                        </>
                    )
                })
            ) : ( <p>Loading...</p> 
            )}</div>
        </div>
    );
}