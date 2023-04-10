import React from 'react';
import Lottie from "lottie-react";
import error from "../assets/error.json";
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  // const { error, status } = useRouteError();
  return (
    <div className='h-screen flex flex-col items-center'>
      <Lottie className='w-[30rem]' animationData={error} loop={true} />
      <Link to='/' className='btn-primary text-2xl'>
        Back to homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
