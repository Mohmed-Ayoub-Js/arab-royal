"use client";
import { useToast } from "@/components/ui/use-toast";
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';

interface QuranProps {
    videoId: string;
}

const Quran = ({ videoId }: QuranProps) => {
    const [audioPlaying, setAudioPlaying] = useState(false);
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    const { toast } = useToast();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setAudio(new Audio(videoId));
        }

        return () => {
            if (audio) {
                audio.pause();
                audio.src = '';
            }
        };
    }, [videoId]);

    const playAudio = () => {
        if (audio) {
            if (!audioPlaying) {
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
            <Button onClick={playAudio}>
                {audioPlaying ? 'إيقاف الصوت' : 'تشغيل الصوت'}
            </Button>
        </div>
    );
};

export default Quran;
