/* COPYRIGHT (C) 2024 - SWATHYMOL SAJEEV | GNU General Public License v3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful,but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>. */

const upload = document.querySelector("input");
const image = document.querySelector(".img img");
const close = document.querySelector(".icon .close");

upload.addEventListener("change", (event)=>{
    uploadFile(event);
});

function uploadFile(event){
    image.classList.add("active");
    close.classList.add("exit");

    if(event.target.files && event.target.files[0]){

        image.src = URL.createObjectURL(event.target.files[0]);

        close.addEventListener("click", ()=>{
            image.classList.toggle("active");
            close.classList.toggle("exit");
        });

    }
}