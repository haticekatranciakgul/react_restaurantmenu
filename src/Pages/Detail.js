import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);

    useEffect(() => {

        fetch('/data.json')
            .then(response => response.json())
            .then(data => {
                const selectedMeal = data.find((item) => item.id === parseInt(id));
                setMeal(selectedMeal);
            })
            .catch(error => console.error('Error fetching meal detail:', error));
    }, [id]);

    if (!meal) {
        return <div>Loading...</div>;
    }

    return (


        <div className="container grid md:grid-cols-2 sm:grid-cols-1  mx-auto text-center">

            <article className="menu-item" >

                <div className="w-full px-4 pb-5 transition duration-300 ease-in-out">
                    <div className="bg-gray-700 p-4">
                        <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                            <div className="grid grid-flow-col gap-1">
                                <div className="max-w-md  bg-gray-300 rounded-xl shadow-md overflow-hidden lg:max-w-2xl">
                                    <div className="lg:flex">
                                        <div className="lg:shrink-0">
                                            <img className="h-48 w-full object-cover lg:h-full lg:w-48" src={meal.img} alt="Modern building architecture" />
                                        </div>
                                        <div className="p-8">
                                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{meal.name}</div>

                                            <p className="mt-2 text-slate-500">{meal.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

            </article>

        </div>
    );
}

export default Detail;
