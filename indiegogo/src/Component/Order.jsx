import {Box, Heading, Button} from "@chakra-ui/react"
import { Link } from "react-router-dom"

function Order(){

    return(
        <Box>
            <Heading>Order Successful</Heading>

            <Link to="/"><Button>Go Back To Home</Button></Link>
        </Box>
    )
}

export default Order;