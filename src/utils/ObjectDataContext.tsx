import React, { createContext, useState } from 'react';

interface ObjectDataContextType {
  userData: any;
  setUserData: React.Dispatch<React.SetStateAction<any>>;
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
  verified: boolean | null;
  setVerified: React.Dispatch<React.SetStateAction<boolean>>;
  isUserAuthenticated: boolean | null;
  setIsUserAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  isSplashVisible: boolean;
  setIsSplashVisible: React.Dispatch<React.SetStateAction<boolean>>;
  selectedImages: any;
  setSelectedImages: React.Dispatch<React.SetStateAction<any>>;
  connectionsData: any;
  setconnectionsData: React.Dispatch<React.SetStateAction<any>>;
  assetIds: string[];
  setAssetIds: React.Dispatch<React.SetStateAction<string[]>>;
  coverPhotos: string[];
  setCoverPhotos: React.Dispatch<React.SetStateAction<string[]>>;
  coverPhotoAssetsIds: string[];
  setcoverPhotoAssetsIds: React.Dispatch<React.SetStateAction<string[]>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedSubCategory: string;
  setSelectedSubCategory: React.Dispatch<React.SetStateAction<string>>;
  keyboardOpen: boolean;
  setKeyboardOpen: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  refreshCatalogPage: boolean;
  setRefreshCatalogPage: React.Dispatch<React.SetStateAction<boolean>>;
  triggerLoadingOnCatalogPage: boolean;
  setTriggerLoadingOnCatalogPage: React.Dispatch<React.SetStateAction<boolean>>;
  catalogLoading: boolean;
  setCatalogLoading: React.Dispatch<React.SetStateAction<boolean>>;
  refreshProfilePage: boolean;
  setRefreshProfilePage: React.Dispatch<React.SetStateAction<boolean>>;
  brandModal: boolean;
  setBrandModal: React.Dispatch<React.SetStateAction<boolean>>;
  setPendingConnectionRequests: React.Dispatch<React.SetStateAction<string[]>>;
  pendingConnectionRequests: string[];
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  profilePhoto: string;
  setProfilePhoto: React.Dispatch<React.SetStateAction<string>>;
  loader: any;
  setLoader: React.Dispatch<React.SetStateAction<any>>;
  suggestedBrands: string[];
  setSuggestedBrands: React.Dispatch<React.SetStateAction<string[]>>;
  brandAssets: any;
  setBrandAssets: React.Dispatch<React.SetStateAction<any>>;
  isUserBrowsing: boolean;
  setIsUserBrowsing: React.Dispatch<React.SetStateAction<any>>;
  preferredVisitingCard: number;
  setPreferredVisitingCard: React.Dispatch<React.SetStateAction<any>>;
  createRequirements: any;
  setCreateRequirements: React.Dispatch<React.SetStateAction<any>>;
  editRequirements: any;
  setEditRequirements: React.Dispatch<React.SetStateAction<any>>;
  productImageAssetIds: any;
  setProductImageAssetIds: React.Dispatch<React.SetStateAction<any>>;
  selectedBrands: React.Dispatch<React.SetStateAction<any>>;
  setSelectedBrands: any;
  recordedVoiceAssetId: any;
  setRecordedVoiceAssetId: React.Dispatch<React.SetStateAction<any>>;
  dailyUpdates: any;
  setDailyUpdates: React.Dispatch<React.SetStateAction<any>>;
  offersData: any;
  setOffersData: React.Dispatch<React.SetStateAction<any>>;
  isEditMode: any;
  setIsEditMode: React.Dispatch<React.SetStateAction<any>>;
}

export const ObjectDataContext = createContext<ObjectDataContextType | null>(
  null
);

interface Props {
  children: React.ReactNode;
}

export const ObjectDataProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<any>(null);
  const [userData, setUserData] = useState<any>(null);
  const [verified, setVerified] = useState<boolean | null>(null);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState<boolean | null>(null);
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const [selectedImages, setSelectedImages] = useState<any>([]);
  const [connectionsData, setconnectionsData] = useState<any>([]);
  const [pendingConnectionRequests, setPendingConnectionRequests] = useState<
    string[]
  >([]);
  const [assetIds, setAssetIds] = useState<string[]>([]);
  const [coverPhotos, setCoverPhotos] = useState<string[]>([]);
  const [coverPhotoAssetsIds, setcoverPhotoAssetsIds] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Category');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('');
  const [keyboardOpen, setKeyboardOpen] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [refreshCatalogPage, setRefreshCatalogPage] = useState<boolean>(false);
  const [triggerLoadingOnCatalogPage, setTriggerLoadingOnCatalogPage] =
    useState<boolean>(false);
  const [catalogLoading, setCatalogLoading] = useState<boolean>(false);
  const [refreshProfilePage, setRefreshProfilePage] = useState<boolean>(false);
  const [brandModal, setBrandModal] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [profilePhoto, setProfilePhoto] = useState<string>('');
  const [loader, setLoader] = useState<string | boolean>(false);
  const [suggestedBrands, setSuggestedBrands] = useState<string[]>([]);
  const [brandAssets, setBrandAssets] = useState<Array<any>>([]);
  const [isUserBrowsing, setIsUserBrowsing] = useState<boolean>(false);
  const [preferredVisitingCard, setPreferredVisitingCard] = useState<number>(0);
  const [productImageAssetIds, setProductImageAssetIds] = useState<Array<any>>(
    []
  );
  const [createRequirements, setCreateRequirements] = useState<any>({
    productName: '',
    description: '',
    budget: '',
    category: '',
    requiredQuantity: '',
    preferredLocationsToBuy: '',
    contactNumber:''
  });
  const [editRequirements, setEditRequirements] = useState<any>({
    productName: '',
    description: '',
    budget: '',
    category: '',
    requiredQuantityInCartons: '',
    preferredLocationsToBuy: '',
  });
  const [selectedBrands, setSelectedBrands] = useState<Array<any>>([]);
  const [recordedVoiceAssetId, setRecordedVoiceAssetId] = useState<any>();
  const [offersData, setOffersData] = useState<Array<any>>([]);
  const [dailyUpdates, setDailyUpdates] = useState<Array<any>>([]);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  return (
    <ObjectDataContext.Provider
      value={{
        data,
        setData,
        userData,
        setUserData,
        isUserAuthenticated,
        setIsUserAuthenticated,
        verified,
        setVerified,
        isSplashVisible,
        setIsSplashVisible,
        selectedImages,
        setSelectedImages,
        assetIds,
        setAssetIds,
        coverPhotos,
        setCoverPhotos,
        coverPhotoAssetsIds,
        setcoverPhotoAssetsIds,
        selectedCategory,
        setSelectedCategory,
        selectedSubCategory,
        setSelectedSubCategory,
        keyboardOpen,
        setKeyboardOpen,
        showModal,
        setShowModal,
        refreshCatalogPage,
        setRefreshCatalogPage,
        setTriggerLoadingOnCatalogPage,
        triggerLoadingOnCatalogPage,
        catalogLoading,
        setCatalogLoading,
        refreshProfilePage,
        setRefreshProfilePage,
        brandModal,
        setBrandModal,
        pendingConnectionRequests,
        setPendingConnectionRequests,
        searchText,
        setSearchText,
        profilePhoto,
        setProfilePhoto,
        loader,
        setLoader,
        suggestedBrands,
        setSuggestedBrands,
        brandAssets,
        setBrandAssets,
        isUserBrowsing,
        setIsUserBrowsing,
        preferredVisitingCard,
        setPreferredVisitingCard,
        createRequirements,
        setCreateRequirements,
        editRequirements,
        setEditRequirements,
        productImageAssetIds,
        setProductImageAssetIds,
        selectedBrands,
        setSelectedBrands,
        recordedVoiceAssetId,
        setRecordedVoiceAssetId,
        connectionsData,
        setconnectionsData,
        offersData,
        setOffersData,
        dailyUpdates,
        setDailyUpdates,
        isEditMode,
        setIsEditMode,
      }}
    >
      {children}
    </ObjectDataContext.Provider>
  );
};
