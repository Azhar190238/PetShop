'use client';
import React, { useState } from 'react';
import SelectCard from '../Common/SelectCard';
import { Pagination } from 'antd';
import HeadingMiddle from '../Common/HeadingMiddle';


    const vetsData = [
        {
            id: 1,
            name: "Dr. Saifa Tazrin Rati",
            title: "Veterinarian, BVMSci(hons) MRCVS",
            image: "/selectPage/1.svg",
            rating: 4.5,
            timeslots: [
                { date: "today", time: "12:00 am", price: "200.00" },
                { date: "today", time: "12:30 am", price: "200.00" }
            ]
        },
        {
            id: 2,
            name: "Dr. John Doe",
            title: "Veterinarian, DVM, MRCVS",
            image: "/selectPage/2.svg",
            rating: 4.2,
            timeslots: [
                { date: "today", time: "1:00 pm", price: "150.00" },
                { date: "today", time: "1:30 pm", price: "150.00" }
            ]
        },
        {
            id: 3,
            name: "Dr. Jane Smith",
            title: "Veterinarian, DVM",
            image: "/selectPage/3.svg",
            rating: 4.8,
            timeslots: [
                { date: "today", time: "2:00 pm", price: "180.00" },
                { date: "today", time: "2:30 pm", price: "180.00" }
            ]
        },
        {
            id: 4,
            name: "Dr. Saifa Tazrin Rati",
            title: "Veterinarian, BVMSci(hons) MRCVS",
            image: "/selectPage/1.svg",
            rating: 4.5,
            timeslots: [
                { date: "today", time: "12:00 am", price: "200.00" },
                { date: "today", time: "12:30 am", price: "200.00" }
            ]
        },
        {
            id: 5,
            name: "Dr. John Doe",
            title: "Veterinarian, DVM, MRCVS",
            image: "/selectPage/2.svg",
            rating: 4.2,
            timeslots: [
                { date: "today", time: "1:00 pm", price: "150.00" },
                { date: "today", time: "1:30 pm", price: "150.00" }
            ]
        },
        {
            id: 6,
            name: "Dr. Jane Smith",
            title: "Veterinarian, DVM",
            image: "/selectPage/3.svg",
            rating: 4.8,
            timeslots: [
                { date: "today", time: "2:00 pm", price: "180.00" },
                { date: "today", time: "2:30 pm", price: "180.00" }
            ]
        },
        {
            id: 7,
            name: "Dr. John Doe",
            title: "Veterinarian, DVM, MRCVS",
            image: "/selectPage/2.svg",
            rating: 4.2,
            timeslots: [
                { date: "today", time: "1:00 pm", price: "150.00" },
                { date: "today", time: "1:30 pm", price: "150.00" }
            ]
        },
        {
            id: 8,
            name: "Dr. Jane Smith",
            title: "Veterinarian, DVM",
            image: "/selectPage/3.svg",
            rating: 4.8,
            timeslots: [
                { date: "today", time: "2:00 pm", price: "180.00" },
                { date: "today", time: "2:30 pm", price: "180.00" }
            ]
        }
    ];

const ITEMS_PER_PAGE = 6;

const Selectvet = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the items to display based on the current page
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentVets = vetsData.slice(startIndex, endIndex);

    // Update page when the pagination changes
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className='max-w-[1320px] mx-auto my-24'>
            <HeadingMiddle heading='select a vet' description='For your online appointment'/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-6'>
                {currentVets.map((vet) => (
                    <SelectCard key={vet.id} vet={vet} />
                ))}
            </div>

            <div className='flex justify-center mt-8'>
                <Pagination
                    current={currentPage}
                    onChange={handlePageChange}
                    pageSize={ITEMS_PER_PAGE}
                    total={vetsData.length}
                    showSizeChanger={false}
                />
            </div>
        </div>
    );
};

export default Selectvet;
