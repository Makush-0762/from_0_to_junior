import React from "react";
import SectionPageMainBlock from './Section_PageMainBlock/SectionPageMainBlock';
import PageCatalogCards from "./Page_CatalogCards/PageCatalogCards";
import PageHitsProducts from "./Page_HitsProducts/PageHitsProducts";
import PageNewProducts from "./Page_NewProducts/PageNewProducts";
import PageSaleProducts from "./Page_SaleProducts/PageSaleProducts";
import PageArticlesModule from "./Page_ArticlesModule/PageArticlesModule";
import PageProductsBlock from "./Page_ProductsBlock/PageProductsBlock";

export default function Main ({className}) {

    return(

        <>
            <main className={className}>
                <SectionPageMainBlock/>
                <PageCatalogCards/>
                <PageHitsProducts titleProducts="Bestsellers" />
                <PageNewProducts className='page__new-products new-products'/>
                <PageSaleProducts className = 'page__sale-products sale-products sale-products_no-bottom'/>
                <PageSaleProducts className = 'page__sale-products sale-products'/>
                <PageNewProducts className='page__new-products new-products new-products_no-top'/>
                <PageSaleProducts className = 'page__sale-products sale-products sale-products_no-bottom'/>
                <PageSaleProducts className = 'page__sale-products sale-products'/>
                <PageArticlesModule />
                <PageProductsBlock />
                <PageHitsProducts titleProducts="Lanterns" />

            </main>
        </>
    )
}