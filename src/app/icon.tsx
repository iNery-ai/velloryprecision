import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 15,
          background: "#2D211D",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#E8D9CD",
          fontWeight: 800,
          borderRadius: 6,
          letterSpacing: "-0.5px",
          border: "1px solid #C9A69A",
        }}
      >
        VP
      </div>
    ),
    {
      ...size,
    }
  );
}
