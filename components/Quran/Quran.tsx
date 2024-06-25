"use client";
import { useToast } from "@/components/ui/use-toast";
import React, { useState } from 'react';
import { Button } from '../ui/button';

interface QuranProps {
    vedioId: string;
}

const Quran = ({ vedioId }: QuranProps) => {
    const [audioPlaying, setAudioPlaying] = useState(false);
    const { toast } = useToast();
    let audio: HTMLAudioElement | null = null;
    const playAudio = () => {
        if (audio) {
            if (audio.paused) {
                audio.play();
                toast({
                    description: "تم تشغيل القرآن الكريم بصوت القارئ أحمد حمادي بدون مؤثرات",
                });
                setAudioPlaying(true);
            } else {
                audio.pause();
                toast({
                    description: "تم إيقاف تشغيل الصوت",
                });
                setAudioPlaying(false);
            }
        }
    };

    return (
        <div>
            <audio ref={(element) => { audio = element; }} src={vedioId} />
            <Button onClick={playAudio}>
                {audioPlaying ? 'إيقاف الصوت' : 'تشغيل الصوت'}
            </Button>
        </div>
    );
};

export default Quran;
