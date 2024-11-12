"use client";
import React, { useState, useEffect } from 'react';
import { Collapse, theme } from 'antd';
import HeadingMiddle from './HeadingMiddle'; 
import { IoMdArrowDropdownCircle } from 'react-icons/io';

const faqData = [
    { key: '1', question: 'What is your refund policy?', answer: 'We offer a full refund within 30 days of purchase.' },
    { key: '2', question: 'How do I change my password?', answer: 'Go to settings and click on "Change Password".' },
    { key: '3', question: 'Do you offer support?', answer: 'Yes, we offer 24/7 support through our support portal.' },
];

const FAQ = () => {
    const [activeKey, setActiveKey] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setActiveKey('1');
        }
    }, []);
    return (
        <div className="max-w-[1320px] mx-auto my-20">
            {/* Heading Component */}
            <HeadingMiddle
                heading="Frequently Asked Questions"
                description="Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud laboris nisi ut aliquip ex ea commodo consequat. fugiat nulla pariatur. Nemo enim ipsam voluptatem quia voluptas voluptatem."
                align="mx-left"
            />

            <div className="w-full max-w-[1320px] mt-12 home1Faq">
                <Collapse
                    accordion
                    activeKey={activeKey}
                    onChange={setActiveKey}
                    expandIconPosition="end"
                    className="!bg-transparent"
                >
                    {faqData.map((item, index) => (
                        <Collapse.Panel
                            key={item.key}
                            header={
                                <div className="flex items-center pl-3 justify-between">
                                    <span className="text-2xl font-bold font-laila text-primary mr-4">
                                        {String(index + 1).padStart(2, '0')}.
                                    </span>
                                    <p
                                        className={`${
                                            activeKey === item.key ? 'text-[#fff]' : 'text-[#2B2B2B]'
                                        } text-2xl font-bold font-laila flex-1`}
                                    >
                                        {item.question}
                                    </p>
                                    <IoMdArrowDropdownCircle
                                        className={`text-4xl text-primary transition-transform duration-300 transform ${
                                            activeKey === item.key ? 'rotate-180' : 'rotate-0'
                                        }`}
                                    />
                                </div>
                            }
                            className="mb-6"
                        >
                            <p className="px-2 font-lora text-[#44433F] text-[16px]">{item.answer}</p>
                        </Collapse.Panel>
                    ))}
                </Collapse>
            </div>
        </div>
    );
};

export default FAQ;

