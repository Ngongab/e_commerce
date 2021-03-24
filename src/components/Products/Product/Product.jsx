import React from 'react';
import { Card, CardMedia, CardContent, CardActions, CardActionArea, Typography, IconButton} from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const classes = useStyles();


    return (
        <Card className={classes.root}>
            <CardActionArea component={Link} to="/Product/:id" >
            <CardMedia className={classes.media} image={product.image} title={Product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterbottom>
                        {product.title}
                    </Typography>
                    <Typography variant="h6" >
                        {product.price}
                    </Typography>
                </div>
                <Typography variant="h7" gutterbottom>
                        {product.category}
                </Typography>
                <div>
                    <Typography variant="body2" color="textSecondary"> {product.description} </Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
            
            </CardActionArea>
        </Card>
    )
}

export default Product