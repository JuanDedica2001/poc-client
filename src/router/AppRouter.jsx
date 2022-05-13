import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Characters } from '../components/Characters';
import { CharactersInfo } from '../components/CharactersInfo';
import { SearchCharacter } from '../components/SearchCharacter';
export const AppRouter = () => {
  return (
  <BrowserRouter>
    <SearchCharacter/>
    <Routes>
      <Route index element={<Characters />} />
      <Route path='/character/:id' element={<CharactersInfo />} />
      <Route path='/search:params' element={<Characters />} />
      <Route path='*' element={<Navigate to={'/'} />} />
    </Routes>
  </BrowserRouter>
  )
}
