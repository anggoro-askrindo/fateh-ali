import { memo } from 'react';
import { Box } from '@mui/material';
import { LogoDevRounded } from '@mui/icons-material';

export const SplashScreen = memo(() => {
  return (
    <Box
      id="splash-screen"
      className="fixed inset-0 flex flex-col items-center justify-center bg-[#111827] text-white z-[999999] pointer-events-none opacity-100 transition-opacity duration-400"
    >
      {/* SVG Logo */}
      <Box className="logo mb-10">
        <LogoDevRounded />
      </Box>

      {/* Bullet Spinner */}
      <Box
        id="spinner"
        className="flex items-center justify-between space-x-2"
      >
        <Box className="w-4 h-4 bg-blue-500 rounded-full animate-bullet" />
        <Box className="w-4 h-4 bg-blue-500 rounded-full animate-bullet delay-200" />
        <Box className="w-4 h-4 bg-blue-500 rounded-full animate-bullet delay-400" />
      </Box>
    </Box>
  );
});

SplashScreen.displayName = 'SplashScreen';