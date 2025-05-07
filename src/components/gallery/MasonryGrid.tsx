"use client";

import React from "react";
import Masonry from "react-masonry-css";
import { SmartImage } from "@/once-ui/components";
import styles from "./Gallery.module.scss";
import { gallery } from "@/app/resources/content";

// Interface pour typer les images de la galerie
interface GalleryImage {
  src: string;
  alt: string;
  orientation: string;
}

export default function MasonryGrid() {
  const breakpointColumnsObj = {
    default: 4,
    1440: 3,
    1024: 2,
    560: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {(gallery.images as GalleryImage[]).map((image, index) => (
        <SmartImage
          priority={index < 10}
          sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw"
          key={index}
          radius="m"
          aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "9 / 16"}
          src={image.src}
          alt={image.alt}
          className={styles.gridItem}
        />
      ))}
    </Masonry>
  );
}
