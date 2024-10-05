import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';


const GameGrid = () => {
    const { games, error, isLoading } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10} padding={1}>
                {isLoading && skeletons.map(s => <GameCardSkeleton key={s} />)}
                {games && games.map(g => <GameCard key={g.id} game={g} />)}
            </SimpleGrid>
        </>

    )
}

export default GameGrid