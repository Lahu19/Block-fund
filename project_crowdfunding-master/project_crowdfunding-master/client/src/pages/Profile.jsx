import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { money } from '../assets';
import { CustomButton, FormField, Loader } from '../components';
import { checkIfImage } from '../utils';

const Profile = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: '',
    username: '',
    password: '',
    confirmpassword:'',
    phoneNo: '', 
    DOB: '',
    image: '',
    address: ''
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.phoneNo.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.image, async (exists) => {
      if(exists) {
        setIsLoading(true)
        await createCampaign({ ...form, phoneNo: ethers.utils.parseUnits(form.phoneNo, 18)})
        setIsLoading(false);
        navigate('/');
      } else {
        alert('Provide valid image URL')
        setForm({ ...form, image: '' });
      }
    })
  }

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {/* {isLoading && <Loader />} */}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Registration</h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Your Name *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange('name', e)}
          />
          <FormField 
            labelName="Username *"
            placeholder="abc19"
            inputType="text"
            value={form.username}
            handleChange={(e) => handleFormFieldChange('username', e)}
          />
        </div>
        <div className="flex flex-wrap gap-[40px]">
        <FormField 
            labelName="Password *"
            placeholder="pass123@"
            value={form.password}
            handleChange={(e) => handleFormFieldChange('password', e)}
          />
          <FormField 
            labelName="Confirm Password *"
            placeholder="pass123@"
            value={form.confirmpassword}
            handleChange={(e) => handleFormFieldChange('confirmpassword', e)}
          />
          </div>

        {/* <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
          <img src={money} alt="money" className="w-[40px] h-[40px] object-contain"/>
          <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">You will get 100% of the raised amount</h4>
        </div> */}

        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Mobile No. *"
            placeholder="xxx xxx xxxx"
            inputType="number"
            value={form.phoneNo}
            handleChange={(e) => handleFormFieldChange('phoneNo', e)}
          />
          <FormField 
            labelName="Date of Birth *"
            placeholder="DD/MM/YYYY"
            inputType="date"
            value={form.DOB}
            handleChange={(e) => handleFormFieldChange('DOB', e)}
          />
        </div>
        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Address *"
            placeholder="Enter your address"
            inputType="text"
            value={form.address}
            handleChange={(e) => handleFormFieldChange('address', e)}
          />
          {/* <FormField 
            labelName="Gender *"
            placeholder="DD/MM/YYYY"
            inputType="date"
            value={form.DOB}
            handleChange={(e) => handleFormFieldChange('DOB', e)}
          /> */}
          
        </div>
        <div className="flex flex-wrap gap-[40px]">
        <FormField 
            labelName="ITR *"
            placeholder="Place ITR file URL"
            inputType="file"
            value={form.image}
            handleChange={(e) => handleFormFieldChange('image', e)}
          />
          <FormField 
            labelName="Enter Identity proof *"
            placeholder="Place any Idetity proof"
            inputType="file"
            value={form.image}
            handleChange={(e) => handleFormFieldChange('image', e)}
          />
        </div>
          <div className="flex justify-center items-center mt-[40px]">
            {/* <CustomButton 
              btnType="submit"
              username="Submit Registration"
              styles="bg-[#1dc071]"
            /> */}
            <button className='bg-[#1dc071] rounded p-[20px]'>
              Submit
            </button>
            <a href="/login" style={{textDecoration:"none", color: 'white', marginLeft:'10px'}}>already registered ?</a>
          </div>
      </form>
    </div>
  )
}

export default Profile