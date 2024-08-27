import { candidates } from "@/app/utils/data";
import { create } from "zustand";

const useCandidateStore = create((set) => ({
  candidates: candidates,
  filteredCandidates: [],
  // All selected options ==================
  AllFiltersObject: {
    City: [],
    State: [],
    // ContactName : [],
    Pincode: [],
    Country: [],
    Salary: [],
    Company: [],
    JobPosition: [],
    Industry: [],
    Tag: [],
  },

  // selected options ==================
  selectedCities: [],
  selectedStates: [],
  // selectedContactName: [],
  selectedPinCode: [],
  selectedCountry: [],
  selectedSalary: [],
  selectedCompanyName: [],
  selectedJobPosition: [],
  selectedIndustry: [],
  selectedTags: [],
  setSelectedCities: (selectedOptions) =>
    set((state) => ({
      selectedCities: selectedOptions,
      AllFiltersObject: {
        ...state.AllFiltersObject,
        City: selectedOptions,
      },
    })),
  setSelectedStates: (selectedOptions) =>
    set((state) => ({
      selectedStates: selectedOptions,
      AllFiltersObject: {
        ...state.AllFiltersObject,
        State: selectedOptions,
      },
    })),
  // setSelectedContactName: (selectedOptions) =>
  //   set((state) => ({
  //     selectedContactName: selectedOptions,
  //     AllFiltersObject: {
  //       ...state.AllFiltersObject,
  //       ContactName: selectedOptions,
  //     },
  //   })),
  setSelectedPinCode: (selectedOptions) =>
    set((state) => ({
      selectedPinCode: selectedOptions,
      AllFiltersObject: {
        ...state.AllFiltersObject,
        PinCode: selectedOptions,
      },
    })),
  setSelectedCountry: (selectedOptions) =>
    set((state) => ({
      selectedCountry: selectedOptions,
      AllFiltersObject: {
        ...state.AllFiltersObject,
        Country: selectedOptions,
      },
    })),
  setSelectedSalary: (selectedOptions) =>
    set((state) => ({
      selectedSalary: selectedOptions,
      AllFiltersObject: {
        ...state.AllFiltersObject,
        Salary: selectedOptions,
      },
    })),
  setSelectedCompanyName: (selectedOptions) =>
    set((state) => ({
      selectedCompanyName: selectedOptions,
      AllFiltersObject: {
        ...state.AllFiltersObject,
        Company: selectedOptions,
      },
    })),
  setSelectedJobPosition: (selectedOptions) =>
    set((state) => ({
      selectedJobPosition: selectedOptions,
      AllFiltersObject: {
        ...state.AllFiltersObject,
        JobPosition: selectedOptions,
      },
    })),
  setSelectedIndustry: (selectedOptions) =>
    set((state) => ({
      selectedIndustry: selectedOptions,
      AllFiltersObject: {
        ...state.AllFiltersObject,
        Industry: selectedOptions,
      },
    })),
  setSelectedTags: (selectedOptions) => 
    set((state) => ({
      selectedTags: selectedOptions,
      AllFiltersObject: {
        ...state.AllFiltersObject,
        Tags: selectedOptions,
      },
    })),


  // remove items badegs

  removeItem: (filterType) => set((state) => {
    return {
      filterType: [],
      AllFiltersObject: {
        ...state.AllFiltersObject,
        [filterType]: [],
      },

    };
  }),

  // Apply filter on click of apply button =========================
  applyFilters: () =>
    set((state) => ({
      filteredCandidates: state.candidates.filter((candidate) => {
        const {
          selectedCities,
          selectedStates,
          selectedPinCode,
          selectedCountry,
          selectedSalary,
          selectedCompanyName,
          selectedJobPosition,
          selectedTags,
        } = state;
        const cityMatch =
          // selectedCities.length === 0 ||
          selectedCities.includes(candidate.city);
        const stateMatch =
          // selectedStates.length === 0 ||
          selectedStates.includes(candidate.state);
        // const contactNameMatch = selectedContactName.length === 0 || selectedContactName.includes(candidate.contactname);
        const pinCodeMatch =
          // selectedPinCode.length === 0 ||
          selectedPinCode.includes(candidate.pincode);
        const countryMatch =
          // selectedCountry.length === 0 ||
          selectedCountry.includes(candidate.country);
        const salaryMatch =
          // selectedSalary.length === 0 ||
          selectedSalary.includes(candidate.salary);
        const companyMatch =
          // selectedCompanyName.length === 0 ||
          selectedCompanyName.includes(candidate.company);
        const jobMatch =
          // selectedJobPosition.length === 0 ||
          selectedJobPosition.includes(candidate.position);
        const tagMatch =
          // selectedTags.length === 0 || 
          selectedTags.includes(candidate.tag);
        return (
          cityMatch ||
          stateMatch ||
          pinCodeMatch ||
          countryMatch ||
          salaryMatch ||
          companyMatch ||
          jobMatch
        );
      }),
    })),

  // Reset all filters and show all candidates on click of reset button ===============
  resetFilters: () => {
    set({
      filteredCandidates: [],
      AllFiltersObject: {
        City: [],
        State: [],
        // ContactName : [],
        Pincode: [],
        Country: [],
        Salary: [],
        Company: [],
        JobPosition: [],
        Industry: [],
        Tag: [],
      },
    
      selectedCities: [],
      selectedStates: [],
      // selectedContactName: [],
      selectedPinCode: [],
      selectedCountry: [],
      selectedSalary: [],
      selectedCompanyName: [],
      selectedJobPosition: [],
      selectedIndustry: [],
      selectedTags: [],
    });
  },

  // Filter using searchbar on the top ===================================
  filterUsingSerch: (searchTerm) =>
    set((state) => ({
      filteredCandidates: state.candidates.filter((candidate) => {
        const searchTermMatch =
          candidate.firstName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          candidate.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          candidate.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          candidate.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          candidate.mobile.toLowerCase().includes(searchTerm.toLowerCase()) ||
          candidate.pincode.toLowerCase().includes(searchTerm.toLowerCase()) ||
          candidate.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
          candidate.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
          candidate.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
          candidate.salary.toLowerCase().includes(searchTerm.toLowerCase()) ||
          candidate.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
          candidate.tag.toLowerCase().includes(searchTerm.toLowerCase()) ||
          candidate.position.toLowerCase().includes(searchTerm.toLowerCase());
        return searchTermMatch;
      }),
    })),
}));

export default useCandidateStore;
