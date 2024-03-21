import React from 'react';
import { FaUsers } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md';
import { BiHappyAlt } from 'react-icons/bi';
import { BsFileEarmarkBarGraph } from 'react-icons/bs';

const Stats = () => {
    return (
        <>
            <section className="stats">
                <div className="m-4 mx-auto text-center d-flex justify-content-around align-items-center cont">
                    <div className="p-4 box w-25">
                        <div className="border border-3 border-primary py-3 rounded-3">
                            <div className="flex justify-center mb-1 icon">
                                <BiHappyAlt />
                            </div>
                            <h2 className="title">99+</h2>
                            <p className="text-secondary">Customer testamonials</p>
                        </div>
                    </div>
                    <div className="p-4 box w-25">
                        <div className="border border-3 border-primary py-3 rounded-3">
                            <div className="flex justify-center mb-1 icon">
                                <BsFileEarmarkBarGraph />
                            </div>
                            <h2 className="title">16+</h2>
                            <p className="text-secondary">Mood Personality Combination</p>
                        </div>
                    </div>
                    <div className="p-4 box w-25">
                        <div className="border border-3 border-primary py-3 rounded-3">
                            <div className="flex justify-center mb-1 icon">
                                <MdPlace />
                            </div>
                            <h2 className="title">50+</h2>
                            <p className="text-secondary">Locations Across World</p>
                        </div>
                    </div>
                    <div className="p-4 box w-25">
                        <div className="border border-3 border-primary py-3 rounded-3">
                            <div className="flex justify-center mb-1 icon">
                                <FaUsers />
                            </div>
                            <h2 className="title">1.3K+</h2>
                            <p className="text-secondary">Registered Users</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Stats