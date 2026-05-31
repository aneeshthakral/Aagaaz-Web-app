import { ImageResponse } from "next/og";

export const alt = "Aagaaz social share preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background:
            "linear-gradient(135deg, #111827 0%, #1f2937 45%, #6f1d1b 100%)",
          color: "#f8f2e7",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: "56px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "72%",
          }}
        >
          <div
            style={{
              border: "1px solid rgba(201, 169, 97, 0.35)",
              borderRadius: "999px",
              color: "#c9a961",
              display: "flex",
              fontSize: 28,
              letterSpacing: 2,
              padding: "14px 24px",
              textTransform: "uppercase",
              alignSelf: "flex-start",
            }}
          >
            Aagaaz, Ludhiana
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                color: "#c9a961",
                display: "flex",
                fontSize: 84,
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              Aagaaz
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 42,
                lineHeight: 1.25,
                maxWidth: 760,
              }}
            >
              Banquet halls, kitty party venues, guest rooms, and Fessta
              Restaurant on Pakhowal Road.
            </div>
          </div>

          <div
            style={{
              color: "rgba(248, 242, 231, 0.8)",
              display: "flex",
              fontSize: 28,
            }}
          >
            Where every celebration begins
          </div>
        </div>

        <div
          style={{
            alignItems: "center",
            border: "1px solid rgba(201, 169, 97, 0.2)",
            borderRadius: 28,
            display: "flex",
            justifyContent: "center",
            padding: 24,
            position: "relative",
            width: "24%",
          }}
        >
          <div
            style={{
              background:
                "radial-gradient(circle, rgba(201,169,97,0.35) 0%, rgba(201,169,97,0) 70%)",
              borderRadius: "999px",
              height: 220,
              position: "absolute",
              width: 220,
            }}
          />
          <div
            style={{
              border: "2px solid rgba(201, 169, 97, 0.6)",
              borderRadius: "999px",
              color: "#c9a961",
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              height: 180,
              justifyContent: "center",
              alignItems: "center",
              width: 180,
            }}
          >
            AG
          </div>
        </div>
      </div>
    ),
    size,
  );
}
