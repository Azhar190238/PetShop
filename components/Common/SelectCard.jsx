// components/SelectCard.js
'use client';
import Image from 'next/image';
import React from 'react';
import { MdVerified } from "react-icons/md";
import { Rate } from 'antd';
import { FaArrowRightLong } from "react-icons/fa6";

const SelectCard = ({ vet }) => {
    return (
        <div className='shadow-box border border-[#D9D9D9] rounded-[20px] px-6 py-10'>
            <div className="flex items-center space-x-6">
                <div className="w-[100px] h-[100px]">
                    <Image
                        src={vet.image} 
                        alt="Profile"
                        height={100}
                        width={100}
                        className="rounded-full"
                    />
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-[#2B2B2B] font-lora capitalize">{vet.name}</h3>
                    <p className="text-[#44433F] text-[14px] font-lora mt-2">{vet.title}</p>
                    <div className='flex  my-3'>
                        <div className='flex space-x-3'>
                            <MdVerified className='mt-[2px] text-xl text-[#3276C3]' />
                            <p className="text-[#44433F] text-[16px] font-lora">license verified</p>
                        </div>
                        <div className='flex ml-3 sm:ml-6 space-x-3'>
                            <Rate disabled defaultValue={1} count={1} className='text-[#FFC000] mt-[2px]' />
                            <p className="text-[#FF6F3F] text-[18px] font-lora">{vet.rating}</p>
                        </div>
                    </div>
                </div>
            </div>

            {vet.timeslots.map((timeslot, index) => (
                <div key={index} className='border rounded-[10px] mt-6 hover:bg-primary group'>
                    <div className='px-6 py-4 flex flex-row justify-between'>
                        <p className='text-[#2B2B2B] font-lora text-[16px] capitalize group-hover:text-white'>
                            {timeslot.date} <span className='text-[#44433F] group-hover:text-white'>{timeslot.time}</span>
                        </p>
                        <p className='text-[#2B2B2B] text-[16px] font-semibold group-hover:text-white'>${timeslot.price}</p>
                    </div>
                </div>
            ))}

            <div className='flex justify-between mt-10 group'>
                <div className='flex space-x-3 items-center'>
                    <p className='capitalize text-[#2B2B2B] group-hover:text-primary font-medium sm:text-lg lg:text-[14px] xl:text-lg font-lora border-b border-b-white group-hover:border-b-primary'>
                        see all timeslots
                    </p>
                    <FaArrowRightLong className='mt-[6px] text-xl group-hover:text-primary' />
                </div>
                <div>
                    <button className="w-full py-4 px-8 rounded-[40px] bg-[#E65F33] text-white font-semibold hover:bg-[#d64e2c] transition duration-300">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SelectCard;
