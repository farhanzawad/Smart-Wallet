
// header design 

if (document.getElementById("headerUsr")) {
    document.getElementById("headerUsr").innerHTML = `<div class="flex justify-center items-center py-10">
        <div class="logo font-semibold justify-center items-center">
            <h1 class="text-center md:text-left">
                <a href="index.html">SMART-WALLET</a>
            </h1>
        </div>
        
    </div>`;
}else{
    document.getElementById("header").innerHTML = `<div class="flex flex-col md:flex-row justify-center md:justify-between items-center py-10">
        <div class="logo font-semibold justify-center items-center">
            <h1 class="text-center md:text-left">
                <a href="index.html">SMART-WALLET</a>
            </h1>
        </div>

        <a href="login.html" class="hidden md:flex">
            <div class="cart p-3 border rounded-full hover:cursor-pointer hover:bg-gray-200 transition ease-in-out duration-300 hover:drop-shadow-md hover:border-gray-400 dark:hover:text-gray-950">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>              
            </div>
        </a>
    </div>`;
}



// footer design

document.getElementById("footer").innerHTML = `<section class="flex flex-col justify-between pt-5 -mb-5 md:mb-0 md:py-10 lg:gap-3">
<div class="flex justify-between items-center">
    <div class="menu">
        <ul class="hidden md:flex gap-5 lg:gap-10 justify-between items-center">
            <li class="hover:scale-110 hover:-translate-y-1 transition ease-in-out duration-300">
                <a href="https://github.com/farhanzawad/" target="_blank" class="text-sm lg:text-base font-bold hover:text-gray-600 ">
                   About 
                </a>
            </li>
            <li class="hover:scale-110 hover:-translate-y-1 transition ease-in-out duration-300">
                <a href="https://github.com/farhanzawad/smartwallet" target="_blank" class="text-sm lg:text-base font-bold hover:text-gray-600 ">
                   How it Works
                </a>
            </li>
            <li class="hover:scale-110 hover:-translate-y-1 transition ease-in-out duration-300">
                <a href="" class="text-sm lg:text-base font-bold hover:text-gray-600 ">
                   Contact 
                </a>
            </li>
        </ul>
    </div>
    <div class="logo font-semibold">
        <h1>
            <a href="index.html">SMART-WALLET</a>
        </h1>
    </div>
    <div class="login">
        <ul class="hidden md:flex gap-10">
            <li class="hover:scale-110 hover:-translate-y-1 transition ease-in-out duration-300">
                <a href="login.html" class="text-sm lg:text-base font-bold hover:text-gray-600 ">
                   Login 
                </a>
            </li>
            <li class="hover:scale-110 hover:-translate-y-1 transition ease-in-out duration-300">
                <a href="login.html" class="text-sm lg:text-base font-bold hover:text-gray-600 ">
                   Sign-up
                </a>
            </li>
            <li class="hover:scale-110 hover:-translate-y-1 transition ease-in-out duration-300">
                <a href="https://www.facebook.com/ahmed.farhan.6G/" target="_blank" class="text-sm lg:text-base font-bold hover:text-gray-600 ">
                   Social
                </a>
            </li>
        </ul>
    </div>
</div>
<div class="copyright -m-28 md:m-0 flex flex-col md:flex-row justify-center md:justify-between">
    <p class="font-extralight text-xs md:text-sm text-center md:text-left">
        &copy Copyright 2023 Ahmed Farhan
    </p>
    <p class="font-extralight text-xs md:text-sm text-center md:text-left">
        Designed by Ahmed Farhan
    </p>
</div>
</section>`