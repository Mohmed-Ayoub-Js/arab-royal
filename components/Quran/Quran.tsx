"use client";
import { useToast } from "@/components/ui/use-toast"

import React, { useState } from 'react';
import { Button } from '../ui/button';

interface QuranProps {
    videoId: string;
}

const Quran = ({ videoId }: QuranProps) => {
    const [audioPlaying, setAudioPlaying] = useState(false);
    const audioRef = React.useRef(new Audio(videoId));
    const { toast } = useToast()

    const playAudio = () => {
        if (!audioPlaying) {
            audioRef.current.play();
            toast({
                description: "تم تشغيل القرآن الكريم بصوت القارئ أحمد حمادي بدون مؤثرات ",
              })
            setAudioPlaying(true);
        } else {
            audioRef.current.pause();
            toast({
                description: "جزاك الله خيرا",
              })
            setAudioPlaying(false);
        }
    };

    return (
        <div>
            <Button onClick={playAudio}>
                {audioPlaying ? 'إيقاف الصوت' : 'تشغيل الصوت'}
            </Button>
        </div>
    );
};

export default Quran;
