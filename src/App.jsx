import React from "react";
import { useState, useEffect } from "react";
import "./App.css"

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-48">
          <img 
            src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
            className="w-full h-full object-cover"
            alt="Cover"
          />
          
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden">
              <img 
                src="https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg"
                className="w-full h-full object-cover"
                alt="Profile"
              />
            </div>
          </div>
        </div>

        <div className="pt-20 px-6 pb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            Tiger King
            <span className="ml-2 text-md text-black px-2 py-1 rounded-full">10</span>
          </h2>
          <p className="text-gray-600 mb-4">London</p>

          <div className="border-t border-gray-200 my-6"></div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold text-gray-800">2.5K</div>
              <div className="text-sm text-gray-600">Followers</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold text-gray-800">15.7K</div>
              <div className="text-sm text-gray-600">Likes</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-xl font-bold text-gray-800">892</div>
              <div className="text-sm text-gray-600">Photos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;