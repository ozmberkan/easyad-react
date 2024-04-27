import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { RiBaseStationLine, RiLoginBoxFill, RiNumbersFill } from "react-icons/ri";
import { BsTelephoneFill, BsCalendar2DateFill } from "react-icons/bs";
import { FaFlag, FaClockRotateLeft } from "react-icons/fa6";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { MdFormatListNumberedRtl } from "react-icons/md";
import secondPhoto from '../assets/2.jpg';
import thirtyPhoto from '../assets/3.jpg';
import fortyPhoto from '../assets/4.jpg';
import Slider from "react-slick";

const Detail = ({ data }) => {
    const { id } = useParams();
    var settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    const ad = data.find((item) => item.id === parseInt(id));

    return (
        <div>
            <Navbar />
            <div className='flex flex-col mt-5'>
                <div className=' w-full flex gap-x-5 justify-between items-center h-[600px]'>
                    <div className='w-[25%] bg-gray-100 border rounded-md bg- h-full'>
                        <div className='bg-[#EF0000] text-white rounded-t px-4 py-2 text-sm font-semibold'>Kullanıcı Bilgileri</div>
                        <div className='p-4'>
                            <div className='bg-gray-300/50 p-4 rounded-xl flex gap-x-5 justify-start items-center'>
                                <img src={ad.seller.userProfilePhoto} alt="" className='rounded-full w-10 h-10' />
                                <div className='flex flex-col'>
                                    <div className='flex gap-x-1'>
                                        <p className='font-bold'>{ad.seller.name}</p>
                                        <p className='font-bold'>{ad.seller.surname}</p>
                                    </div>
                                    <p className='text-xs'>Yüksek derece!</p>
                                </div>
                            </div>
                            <div className='mt-4 flex flex-col gap-y-3'>
                                <div className='font-medium p-3 text-sm  border-b flex justify-between'><p className='font-bold flex items-center gap-x-2'><BsTelephoneFill size={16} className='text-[#EF0000]' />Telefon </p> <p className='text-sm  w-20 text-right'>{ad.seller.phone}</p></div>
                                <div className='font-medium p-3 text-sm  border-b flex justify-between'><p className='font-bold flex items-center gap-x-2'><BsCalendar2DateFill size={16} className='text-[#EF0000]' />Kayıt Tarihi</p> <p className='text-sm  w-20 text-right'>{ad.seller.registerDate}</p></div>
                                <div className='font-medium p-3 text-sm  border-b flex justify-between'><p className='font-bold flex items-center gap-x-2'><RiLoginBoxFill size={16} className='text-[#EF0000]' />Son Giriş:</p> <p className='text-sm  w-20 text-right'>{ad.seller.lastLogin}</p></div>
                                <div className='font-medium p-3 text-sm  border-b flex justify-between'><p className='font-bold flex items-center gap-x-2'><FaFlag size={16} className='text-[#EF0000]' />Ülke:</p> <p className='text-sm  w-20 text-right'>{ad.seller.userCountry}</p></div>
                                <div className='font-medium p-3 text-sm  border-b flex justify-between'><p className='font-bold flex items-center gap-x-2'><FaClockRotateLeft size={16} className='text-[#EF0000]' />Son Giriş Saati:</p> <p className='text-sm  w-20 text-right'>{ad.seller.lastloginTime}</p></div>
                                <div className='font-medium p-3 text-sm  border-b flex justify-between'><p className='font-bold flex items-center gap-x-2'><HiOutlineStatusOnline size={16} className='text-[#EF0000]' />Giriş Durumu</p> <p className='text-green-400'>Aktif</p></div>
                                <div className='font-medium p-3 text-sm  border-b flex justify-between'><p className='font-bold flex items-center gap-x-2'><RiNumbersFill size={16} className='text-[#EF0000]' />Aktif İlan Sayısı:</p> <p className='text-sm  w-20 text-right'>{ad.seller.activeAdAmount}</p></div>
                                <div className='font-medium p-3 text-sm flex justify-between'><p className='font-bold flex items-center gap-x-2'><MdFormatListNumberedRtl size={16} className='text-[#EF0000]' />Toplam İlan Sayısı:</p> <p className='text-sm  w-20 text-right'>{ad.seller.totalAdAmount}</p></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[55%] h-full'>
                        <div className="grid grid-cols-5 grid-rows-7 gap-4 h-full">
                            <div className='bg-[#F0F0F0]/75 rounded-md' >
                                <div className='w-full p-1 bg-[#EF0000] text-white font-semibold text-center text-sm rounded-t-md '>Fiyat</div>
                                <div className='w-full flex justify-center items-center  p-2 font-semibold'>{ad?.housing.price.toLocaleString('tr-TR') + ' ₺'}</div>
                            </div>
                            <div className="col-span-4 bg-[#F0F0F0]/75 rounded-md">
                                <div className='w-full p-1  bg-[#EF0000] text-white font-semibold text-center text-sm rounded-t-md'>İlan Başlığı</div>
                                <div className='flex justify-center items-center mt-2.5 font-medium '>{ad.housing.title}</div>
                            </div>
                            <div className="row-span-2 row-start-2  w-full relative">
                                <img src={secondPhoto} className='w-full flex justify-center items-center h-full object-cover  rounded-md' alt="" />
                                <span className='rounded-b-md absolute bottom-0 w-full p-1 bg-gray-400 flex justify-center items-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 font-semibold text-white'>1</span>
                            </div>
                            <div className="row-span-2 col-start-1 row-start-4  w-full relative">
                                <img src={thirtyPhoto} className='w-full flex justify-center items-center h-full object-cover  rounded-md' alt="" />
                                <span className='rounded-b-md absolute bottom-0 w-full p-1 bg-gray-400 flex justify-center items-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 font-semibold text-white'>2</span>
                            </div>
                            <div className="row-span-2 col-start-1 row-start-6  w-full relative">
                                <img src={fortyPhoto} className='w-full flex justify-center items-center h-full object-cover  rounded-md' alt="" />
                                <span className='rounded-b-md absolute bottom-0 w-full p-1 bg-gray-400 flex justify-center items-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 font-semibold text-white'>3</span>
                            </div>
                            <div className="col-span-4 row-span-6 col-start-2 row-start-2 bg-gray-500 h-full cursor-grab">
                                <Slider {...settings} >
                                    <div>
                                        <img src={secondPhoto} alt="" className='w-full h-[512px]' />
                                    </div>
                                    <div>
                                        <img src={thirtyPhoto} alt="" className='w-full h-[512px]' />
                                    </div>
                                    <div>
                                        <img src={fortyPhoto} alt="" className='w-full h-[512px]' />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div className='w-[25%] bg-[#F0F0F0]/75 h-full'>
                        <div className='bg-[#EF0000] text-white p-1 text-center text-sm font-semibold rounded-t-md'>İlan Bilgileri</div>
                        <div className='mt-2 flex flex-col gap-y-2 p-4'>
                            <div className='font-medium h-10 text-sm  border-b flex justify-center items-center px-2'>
                                <p className='font-bold flex h-full justify-start items-center w-1/2 '>İlan No</p>
                                <p className='text-sm  w-1/2 h-full flex justify-end items-center font-semibold'>{ad.id}</p>
                            </div>
                            <div className='font-medium h-10 text-sm  border-b flex justify-center items-center px-2'>
                                <p className='font-bold flex h-full justify-start items-center w-1/2 '>Metrekare</p>
                                <p className='text-sm  w-1/2 h-full flex justify-end items-center font-semibold'>{ad.housing.meter}m2</p>
                            </div>
                            <div className='font-medium h-10 text-sm  border-b flex justify-center items-center px-2'>
                                <p className='font-bold flex h-full justify-start items-center w-1/2 '>Oda Sayısı</p>
                                <p className='text-sm  w-1/2 h-full flex justify-end items-center font-semibold'>{ad.housing.roomAmount}</p>
                            </div>
                            <div className='font-medium h-10 text-sm  border-b flex justify-center items-center px-2'>
                                <p className='font-bold flex h-full justify-start items-center w-1/2 '>Bina Yaşı</p>
                                <p className='text-sm  w-1/2 h-full flex justify-end items-center font-semibold '>{ad.housing.age}</p>
                            </div>
                            <div className='font-medium h-10 text-sm  border-b flex justify-center items-center px-2'>
                                <p className='font-bold flex h-full justify-start items-center w-1/2 '>Isıtma</p>
                                <p className='text-sm  w-1/2 h-full flex justify-end items-center font-semibold'>{ad.housing.heatStatus}</p>
                            </div>
                            <div className='font-medium h-10 text-sm  border-b flex justify-center items-center px-2'>
                                <p className='font-bold flex h-full justify-start items-center w-1/2 '>Bulunuduğu Kat</p>
                                <p className='text-sm  w-1/2 h-full flex justify-end items-center font-semibold'>{ad.housing.floor}</p>
                            </div>
                            <div className='font-medium h-10 text-sm  border-b flex justify-center items-center px-2'>
                                <p className='font-bold flex h-full justify-start items-center w-1/2 '>Toplam Kat</p>
                                <p className='text-sm  w-1/2 h-full flex justify-end items-center font-semibold'>{ad.housing.totalfloor}</p>
                            </div>
                            <div className='font-medium h-10 text-sm  border-b flex justify-center items-center px-2'>
                                <p className='font-bold flex h-full justify-start items-center w-1/2 '>Cephe</p>
                                <p className='text-sm  w-1/2 h-full flex justify-end items-center font-semibold'>{ad.housing.exterior}</p>
                            </div>
                            <div className='font-medium h-10 text-sm  border-b flex justify-center items-center px-2'>
                                <p className='font-bold flex h-full justify-start items-center w-1/2 '>Otopark</p>
                                <p className='text-sm  w-1/2 h-full flex justify-end items-center font-semibold'>{ad.housing.carPark}</p>
                            </div>
                            <div className='font-medium h-10 text-sm  border-b flex justify-center items-center px-2'>
                                <p className='font-bold flex h-full justify-start items-center w-1/2 '>Asansör</p>
                                <p className='text-sm  w-1/2 h-full flex justify-end items-center font-semibold'>{ad.housing.elevator}</p>
                            </div>
                            <div className='font-medium h-10 text-sm  flex justify-center items-center px-2'>
                                <p className='font-bold flex h-full justify-start items-center w-1/2 '>Şehir</p>
                                <p className='text-sm  w-1/2 h-full flex justify-end items-center font-semibold'>{ad.country.city}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full border rounded-md mt-6 h-[150px]'>
                    <div className='bg-gray-300/30 text-black  py-2 text-left px-4 text-sm font-semibold rounded-t-md'>İlan Açıklaması</div>
                    <div className='p-4 text-base font-semibold'>
                        <p>{ad.housing.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
