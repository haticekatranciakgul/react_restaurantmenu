import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Grid } from '@mui/material';


function Menu() {
    const [meals, setMeals] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');


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

                <Grid container spacing={2} sx={{ my: 2 }}>
                    <Grid size={6}>
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
                    </Grid>
                    <Grid size={6}>
                        <p className="text-white font-medium my-2">Search Meals</p>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search by name..."
                            className="w-full py-1.5 pl-3 pr-7 text-base text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                    </Grid>


                </Grid>

                <Grid container spacing={2} sx={{ my: 2 }}>

                    {filteredMeals.map((meal) => (
                        <Grid size={4}>
                            <article className="menu-item" key={meal.id}>
                                <Link to={`/Detail/${meal.id}`}>
                                    <Card className="bg-gray-300"  sx={{ maxWidth: 'auto', height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                        <CardActionArea >
                                            <CardMedia
                                                component="img"
                                                src={meal.img}
                                                alt={meal.name}
                                                sx={{
                                                    height: 200,
                                                    objectFit: 'cover', // Görsel kartın içine orantılı sığar, kırpılabilir
                                                    width: '100%',
                                                  }}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {meal.name}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'text.secondary',  height: 60, overflow: 'hidden' }}>
                                                    {meal.description} - {meal.category}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Share
                                            </Button>
                                        </CardActions>
                                    </Card>




                                </Link>
                            </article>
                        </Grid>
                    ))}

                </Grid>
            </section>
        </div>
    );
}

export default Menu;
