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
  setSelectedCity: (selectedOptions) =>
    set((state) => ({
      // selectedCities: selectedOptions,
      AllFiltersObject: {
        ...state.AllFiltersObject,
        City: selectedOptions,
      },
    })),
  setSelectedState: (selectedOptions) =>
    set((state) => ({
      AllFiltersObject: {
        ...state.AllFiltersObject,
        State: selectedOptions,
      },
    })),
  // setSelectedContactName: (selectedOptions) =>
  //   set((state) => ({
  //     AllFiltersObject: {
  //       ...state.AllFiltersObject,
  //       ContactName: selectedOptions,
  //     },
  //   })),
  setSelectedPincode: (selectedOptions) =>
    set((state) => ({
      AllFiltersObject: {
        ...state.AllFiltersObject,
        Pincode: selectedOptions,
      },
    })),
  setSelectedCountry: (selectedOptions) =>
    set((state) => ({
      AllFiltersObject: {
        ...state.AllFiltersObject,
        Country: selectedOptions,
      },
    })),
  setSelectedSalary: (selectedOptions) =>
    set((state) => ({
      AllFiltersObject: {
        ...state.AllFiltersObject,
        Salary: selectedOptions,
      },
    })),
  setSelectedCompany: (selectedOptions) =>
    set((state) => ({
      AllFiltersObject: {
        ...state.AllFiltersObject,
        Company: selectedOptions,
      },
    })),
  setSelectedJobPosition: (selectedOptions) =>
    set((state) => ({
      AllFiltersObject: {
        ...state.AllFiltersObject,
        JobPosition: selectedOptions,
      },
    })),
  setSelectedIndustry: (selectedOptions) =>
    set((state) => ({
      AllFiltersObject: {
        ...state.AllFiltersObject,
        Industry: selectedOptions,
      },
    })),
  setSelectedTag: (selectedOptions) =>
    set((state) => ({
      AllFiltersObject: {
        ...state.AllFiltersObject,
        Tag: selectedOptions,
      },
    })),

  // remove items badegs

  removeItem: (filterType) =>
    set((state) => {
      return {
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
          AllFiltersObject,
        } = state;
        const cityMatch =
          AllFiltersObject.City.includes(candidate.city);
        const stateMatch =
          AllFiltersObject.State.includes(candidate.state);
        // const contactMatch = AllFiltersObject.ContactName.includes(candidate.contactname);
        const PincodeMatch =
          AllFiltersObject.Pincode.includes(candidate.Pincode);
        const countryMatch =
          AllFiltersObject.Country.includes(candidate.country);
        const salaryMatch =
          AllFiltersObject.Salary.includes(candidate.salary);
        const companyMatch =
          AllFiltersObject.Company.includes(candidate.company);
        const jobMatch =
          AllFiltersObject.JobPosition.includes(candidate.position);
        const tagMatch =
          AllFiltersObject.Tag.includes(candidate.tag);
        return (
          cityMatch ||
          stateMatch ||
          PincodeMatch ||
          countryMatch ||
          salaryMatch ||
          companyMatch ||
          jobMatch ||
          tagMatch
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
          candidate.Pincode.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
