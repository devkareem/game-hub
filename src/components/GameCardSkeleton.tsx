import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
    return (
        <Card>
            <Skeleton height='200px' width='300px'>
                <CardBody>
                    <SkeletonText />
                </CardBody>
            </Skeleton>
        </Card>
    )
}

export default GameCardSkeleton