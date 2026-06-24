import { useEffect, useState } from "react";
import type { Module } from "@/types";


export function useModules(
    search = "",
    category = ""
) {

    const [data, setData] = useState<Module[]>([]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {


        async function load() {


            const res =
                await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/modules?search=${search}&category=${category}`
                );


            const json = await res.json();


            setData(json.data);

            setLoading(false);


        }


        load();


    }, [search, category]);



    return {
        data,
        loading
    }


}