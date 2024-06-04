import { AwardsDataType } from "@resume/Types/DataProfile";
import Text from "@resume/components/Text";
import { Button, Image, Modal, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { RiFlipHorizontalFill, RiFlipHorizontalLine } from "react-icons/ri";

interface ModalAwardProps {
  selectedId: number;
  setSelectedId: (v: number | null) => void;
  selectedData: AwardsDataType;
}

// fix preload Image
function preloadImage(src: string, onLoad: () => void) {
  const img = new window.Image();
  img.src = src;
  img.onload = onLoad;
}

function ModalAward(props: ModalAwardProps) {
  const { selectedData, selectedId, setSelectedId } = props;

  const [isFliped, setIsFliped] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isCanFlipped = selectedData?.images?.length > 1;

  useEffect(() => {
    if (isCanFlipped) {
      setIsLoading(true);
      preloadImage(selectedData.images[1], () => setIsLoading(false));
    }
  }, [isCanFlipped, selectedData]);

  return (
    <Modal
      centered
      open={!!selectedId}
      footer={false}
      closable={false}
      onCancel={() => {
        setSelectedId(null);

        // fix other content get flipped
        setIsFliped(false);
      }}
    >
      <div className="relative w-full">
        {isCanFlipped && (
          <Button
            className="flex items-center justify-center absolute top-5 right-5 z-[99] bg-white p-5 hover:bg-white border-none"
            onClick={() => setIsFliped(!isFliped)}
          >
            {isFliped ? (
              <RiFlipHorizontalLine className="w-5 h-5 text-primary" />
            ) : (
              <RiFlipHorizontalFill className="w-5 h-5 text-primary" />
            )}
          </Button>
        )}
        <Spin spinning={isLoading}>
          <Image
            key={isFliped ? "flipped" : "not-flipped"}
            className="overflow-hidden rounded-t-lg"
            src={selectedData?.images?.[isFliped && isCanFlipped ? 1 : 0]}
          />
        </Spin>
      </div>
      <div className="p-5 flex flex-col gap-y-3 max-sm:gap-y-1">
        <Text className="font-archivo font-bold text-2xl text-primary max-2xl:text-xl max-sm:text-base">
          {selectedData?.title}
        </Text>
        <Text className="font-archivo font-thin text-base max-sm:text-sm max-[440px]:text-xs">
          {selectedData?.description}
        </Text>
      </div>
    </Modal>
  );
}

export default ModalAward;
