'use client';

export default function BlobPage() {
  return (
    <div>
      <style jsx>{`
        .blob-container {
          position: relative;
          width: 300px;
          height: 300px;
          margin: 40px auto;
        }

        .blob {
          width: 100%;
          height: 100%;
          background-color: #f15bb5;
          border-radius: 40% 60% 65% 35% / 40% 35% 65% 60%;
        }

        .label {
          position: absolute;
          background-color: #fff;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: bold;
          color: #333;
        }

        .top-left {
          top: -25px;
          left: 0;
          background-color: #4caf50;
        }

        .top-right {
          top: -25px;
          right: 0;
          background-color: #ff9800;
        }

        .bottom-left {
          bottom: -25px;
          left: 0;
          background-color: #2196f3;
        }

        .bottom-right {
          bottom: -25px;
          right: 0;
          background-color: #9c27b0;
        }

        .left-top {
          top: 25%;
          left: -40px;
          background-color: #4caf50;
        }

        .left-bottom {
          top: 65%;
          left: -40px;
          background-color: #2196f3;
        }

        .right-top {
          top: 25%;
          right: -40px;
          background-color: #ff9800;
        }

        .right-bottom {
          top: 65%;
          right: -40px;
          background-color: #9c27b0;
        }
      `}</style>

      <div className="blob-container">
        <div className="blob" />
          <span className="">
            <p>
            Let's make magic!
          </p>
          </span>
      </div>
    </div>
  );
}