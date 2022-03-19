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
    //console.log(data[0].picks)
    //console.log(typeof data[0].picks)

    //let Items = data.Items

    // TODO: Figure out how to map out the picks for each movie
    // const KeyVal = ...

    return(
        <div>
            <p>Data Here</p>
            <div>{ data ? (
                data.map((item) => {
                    return (
                        <>
                            <p>Episode Number : {item.EpisodeNum} </p>
                            <p>Date: {item.date}</p>
                            <div>
                                {item.picks.Alonso}
                            </div>
                        </>
                    )
                })
            ) : ( <p>Loading...</p> 
            )}</div>
        </div>
    );
}