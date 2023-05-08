import { useSelector } from "react-redux"

import { ImageList, ImageListItem } from "@mui/material"


export const ImageGallery = () => {
    const { active } = useSelector( (state) => state.journal )
    return (
        <ImageList
            sx={{ width: '100%', height: 500 }}
            cols={4}
            rowHeight={200}
        >
            {
                active.imageUrls? active.imageUrls.map((image) => (
                <ImageListItem key={image}>
                    <img
                        src={`${image.url}`}
                        srcSet={`${image}`}
                        alt={'img'}
                        loading="lazy"
                    />
                </ImageListItem>

            )) : <></>
            }
        </ImageList>
    )
    }
