import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Characters } from '../components/Characters';
import { CharactersInfo } from '../components/CharactersInfo';
export const AppRouter = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route index element={<Characters />} />
      <Route path="/character/:id" element={<CharactersInfo />} />
      <Route path='*' element={<Navigate to={'/'} />} />
    </Routes>
  </BrowserRouter>
  )
}
