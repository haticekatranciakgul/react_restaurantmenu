import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    const [meals, setMeals] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(''); // Kategori seçimi için state
    const [searchQuery, setSearchQuery] = useState(''); // Arama sorgusu için state

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setMeals(data))
            .catch(error => console.error('Error fetching meals:', error));
    }, []);

    // Seçilen kategoriye ve arama sorgusuna göre filtreleme
    const filteredMeals = meals.filter(meal => {
        const matchesCategory = selectedCategory ? meal.category === selectedCategory : true;
        const matchesSearchQuery = meal.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearchQuery;
    });

    return (
        <div className="container ">
            <section className="mains">
                <div className="grid grid-cols-2 gap-4 my-5">
                    <div>
                        <p className="text-white font-medium my-2">Select Category</p>
                        <select
                            id="category"
                            name="category"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            aria-label="Category"
                            className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        >
                            <option value="">All Categories</option>
                            {[...new Set(meals.map(meal => meal.category))].map((category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Arama Input */}
                    <div>
                        <p className="text-white font-medium my-2">Search Meals</p>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search by name..."
                            className="w-full py-1.5 pl-3 pr-7 text-base text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-auto text-center">
                    {filteredMeals.map((meal) => (
                        <article className="menu-item" key={meal.id}>
                            <Link to={`/Detail/${meal.id}`}>
                                <div className="w-full pb-5 transition duration-300 ease-in-out">
                                    <div className="bg-gray-700 p-4">
                                        <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                                            <div className="grid grid-flow-col gap-1">
                                                <div className="max-w-md bg-gray-300 rounded-xl shadow-md overflow-hidden lg:max-w-2xl">
                                                    <div className="lg:flex">
                                                        <div className="lg:shrink-0">
                                                            <img
                                                                className="h-48 w-full object-cover lg:h-full lg:w-48"
                                                                src={meal.img}
                                                                alt={meal.name}
                                                            />
                                                        </div>
                                                        <div className="p-8">
                                                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                                                {meal.name}
                                                            </div>
                                                            <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                                                                ${meal.price}
                                                            </p>
                                                            <p className="mt-2 text-slate-500">
                                                                {meal.description} - {meal.category}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Menu;
