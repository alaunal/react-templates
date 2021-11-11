import tw, { styled, css } from 'twin.macro';

export const Content = styled.div(() => [
    css`
        height: calc(100vh - 80px);
    `,
    tw`flex items-center justify-center flex-col`
]);

export const Heading = styled.h1(() => [
    tw`text-7xl font-bold text-center font-mono mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500`
]);

export const Context = styled.h1(() => [
    tw`text-xl text-gray-600 text-center font-sans`
]);

export const Button = styled.button(() => [
    tw`inline-flex px-8 py-3 text-white bg-purple-600 hover:bg-purple-500 text-lg rounded-xl`
]);