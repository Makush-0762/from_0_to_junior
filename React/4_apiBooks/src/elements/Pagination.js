import React from "react";
// import { Link } from "react-router-dom";
import Pagination from 'react-bootstrap-v5/lib/Pagination';

export default function PaginatiOn() {

    return (
        <>
           <Pagination >
                <Pagination.First  />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </>
    )
}