"use client";
import {useEffect,useState} from 'react';
export default function ScrollCue(){const [show,setShow]=useState(true);useEffect(()=>{const onScroll=()=>setShow(window.scrollY<45);onScroll();window.addEventListener('scroll',onScroll,{passive:true});return()=>window.removeEventListener('scroll',onScroll)},[]);return <span className={`scroll-cue ${show?'':'scroll-cue-hidden'}`} aria-hidden={!show}>SCROLL TO EXPLORE ↓</span>}
